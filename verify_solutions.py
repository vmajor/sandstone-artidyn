import asyncio
from playwright.async_api import async_playwright
import subprocess
import time
import os

async def run():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page(viewport={'width': 1280, 'height': 800})

        # Start the server
        print("Starting dev server...")
        server = subprocess.Popen(["npm", "run", "dev"], stdout=subprocess.PIPE, stderr=subprocess.PIPE)
        time.sleep(8) # Wait for server to start

        try:
            solutions = ["1", "2", "3"]
            for s in solutions:
                url = f"http://localhost:4321/solutions/{s}/"
                print(f"Capturing screenshot for {url}...")
                await page.goto(url)
                await page.wait_for_timeout(2000) # Wait for fonts/images
                await page.screenshot(path=f"solution_{s}.png", full_page=True)
                print(f"Saved solution_{s}.png")

            print("Verification screenshots captured successfully!")

        except Exception as e:
            print(f"Error during verification: {e}")
            raise e
        finally:
            server.terminate()
            await browser.close()

if __name__ == "__main__":
    asyncio.run(run())
