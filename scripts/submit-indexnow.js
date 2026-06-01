import fs from "fs";
import path from "path";

// 1. Configuration
const HOST = "www.artidyn.ai";
const SITE_URL = `https://${HOST}`;
const ENDPOINT = "https://api.indexnow.org/indexnow";
const SITEMAP_PATH = path.resolve("./dist/sitemap-0.xml"); // Adjust if your sitemap name/path differs

// Read the key from the public folder
const keyPath = path.resolve("./public/db94d271-1959-4b4f-aa53-7cd1e496e565.txt");
const key = fs.readFileSync(keyPath, "utf-8").trim();

async function submitUrls() {
  try {
    // 2. Extract URLs from the generated sitemap
    if (!fs.existsSync(SITEMAP_PATH)) {
      throw new Error(`Sitemap not found at ${SITEMAP_PATH}. Make sure the build succeeded.`);
    }
    
    const sitemapContent = fs.readFileSync(SITEMAP_PATH, "utf-8");
    
    // Simple regex to extract URLs from the <loc> tags in the XML
    const urlMatches = [...sitemapContent.matchAll(/<loc>(.*?)<\/loc>/g)];
    const urls = urlMatches.map(match => match[1]);

    if (urls.length === 0) {
      console.log("No URLs found in the sitemap. Exiting.");
      return;
    }

    console.log(`Found ${urls.length} URLs. Submitting to IndexNow...`);

    // 3. Prepare the IndexNow payload
    const body = {
      host: HOST,
      key: key,
      keyLocation: `${SITE_URL}/${key}.txt`,
      urlList: urls,
    };

    // 4. Send the request
    const response = await fetch(ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    if (response.ok) {
      console.log("✅ Successfully submitted to IndexNow. Status:", response.status);
    } else {
      console.error("❌ Failed to submit. Status:", response.status);
      console.error("Response:", await response.text());
    }
    
  } catch (error) {
    console.error("Error during IndexNow submission:", error);
  }
}

submitUrls();