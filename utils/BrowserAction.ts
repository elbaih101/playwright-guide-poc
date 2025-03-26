import { Page, Browser } from "@playwright/test";
import { LogInfo } from "./Logger";

export class BrowserAction {


  static async goto(page: Page, url: string) {
    LogInfo(`Navigating to:`,url );
    return await page.goto(url);
  }
  static async goBack(page: Page) {
    LogInfo(`Going back`);
    return await page.goBack();
  }
  static async goForward(page: Page) {
    LogInfo(`Going forward`);
    return await page.goForward();
  }
  static async getPageTitle(page: Page) {
    LogInfo(`Getting page title from Page`,page.toString());
    await page.waitForLoadState('load');
    return await page.title();
  }
}
