import os
import base64
import requests
import argparse
import mimetypes  # Prevents MIME type mismatch anomalies

def batch_process(input_dir, output_dir, prompt, server_url):
    if not os.path.exists(output_dir):
        os.makedirs(output_dir)

    # Filter for valid images
    valid_exts = ('.png', '.jpg', '.jpeg', '.webp')
    files = [f for f in os.listdir(input_dir) if f.lower().endswith(valid_exts)]
    
    print(f"Found {len(files)} images. Connecting to {server_url}...")

    for idx, filename in enumerate(files):
        in_path = os.path.join(input_dir, filename)
        out_path = os.path.join(output_dir, f"edit_{filename}")
        
        print(f"[{idx+1}/{len(files)}] Processing {filename}...")
        
        # 1. Dynamically find the correct MIME type (image/jpeg, image/png, etc.)
        mime_type, _ = mimetypes.guess_type(in_path)
        if not mime_type:
            mime_type = 'application/octet-stream'

        try:
            with open(in_path, 'rb') as f:
                files_payload = {
                    'image': (filename, f, mime_type)
                }
                
                # 2. Match your CLI resolution exactly & use the extra args tag if needed
                data_payload = {
                    'prompt': f"{prompt} <sd_cpp_extra_args>{{\"cfg_scale\": 1.0}}</sd_cpp_extra_args>",
                    'n': 1,
                    'size': '800x800', 
                    'response_format': 'b64_json' 
                }
                
                response = requests.post(
                    f"{server_url}/v1/images/edits",
                    files=files_payload,
                    data=data_payload,
                    timeout=30000  # High timeout for local processing
                )

            if response.status_code == 200:
                result = response.json()
                if 'data' in result and len(result['data']) > 0:
                    b64_data = result['data'][0]['b64_json']
                    with open(out_path, 'wb') as out_f:
                        out_f.write(base64.b64decode(b64_data))
                    print(f"✔ Saved: {out_path}")
                else:
                    print(f"⚠ Server returned success but no data: {result}")
            else:
                print(f"✘ Error {response.status_code}: {response.text}")

        except Exception as e:
            print(f"✘ Failed to process {filename}: {e}")

if __name__ == '__main__':
    parser = argparse.ArgumentParser(description="Batch drive sd-server for Qwen-Image-Edit")
    parser.add_argument('--input', required=True, help="Folder containing source images")
    parser.add_argument('--output', required=True, help="Folder to save edited images")
    parser.add_argument('--prompt', required=True, help="Instruction for the edit")
    parser.add_argument('--url', default="http://127.0.0.1:1234", help="sd-server endpoint URL")
    
    args = parser.parse_args()
    batch_process(args.input, args.output, args.prompt, args.url)