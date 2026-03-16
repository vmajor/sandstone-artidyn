import asyncio
from playwright.async_api import async_playwright

async def run():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page()

        # Start the server
        import subprocess
        import time
        server = subprocess.Popen(["npm", "run", "dev"], stdout=subprocess.PIPE, stderr=subprocess.PIPE)
        time.sleep(5) # Wait for server to start

        try:
            # 1. Check Catalog Page
            print("Checking Catalog Page...")
            await page.goto("http://localhost:4321/projects")
            await page.wait_for_selector("text=Explore our certified range")

            # Check for categories
            await page.wait_for_selector("#category-compact")
            await page.wait_for_selector("#category-high-volume")
            await page.wait_for_selector("#category-craft")

            # 2. Check a Product Page (Anno AI Bar 2.0)
            print("Checking Anno AI Bar 2.0 Detail Page...")
            await page.goto("http://localhost:4321/projects/robot-anno-ai-bar-2-0")
            await page.wait_for_selector("h1:has-text('Robot Anno AI Bar 2.0')")

            # Check for Spec Table
            await page.wait_for_selector("text=Technical Specifications")
            await page.wait_for_selector("text=Throughput")
            await page.wait_for_selector("text=40 cups/hr")

            # Check for Features
            await page.wait_for_selector("text=Key Features")
            await page.wait_for_selector("text=Open Bar Design")

            # 3. Check for Narrative
            await page.wait_for_selector("text=experiential retail centerpiece")

            # 4. Check Navigation from Service Page
            print("Checking Navigation from Service Page...")
            await page.goto("http://localhost:4321/services/2") # High-Volume Automation
            # The button text is "View Certified Robots"
            await page.click("text=View Certified Robots")
            await page.wait_for_url("http://localhost:4321/projects#category-high-volume")

            print("All checks passed successfully!")

        except Exception as e:
            print(f"Error during verification: {e}")
            # Take a screenshot on failure
            await page.screenshot(path="failure_final.png")
            raise e
        finally:
            server.terminate()
            await browser.close()

if __name__ == "__main__":
    asyncio.run(run())
