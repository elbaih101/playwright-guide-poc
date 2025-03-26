import { Page, Browser, Locator } from "@playwright/test";
import { LogInfo } from "./Logger";

export class ElementActions {


  static async click(locator: Locator) {
    LogInfo(`Clicking on`,locator.toString());
    await locator.click();
  }
  static async getText(locator: Locator) {
    LogInfo(`Getting text from`,locator.toString());
    return await locator.textContent;
  }
  static async fill(locator: Locator, text: string) {
    LogInfo(`Filling text`,text,`in`,locator.toString());
    return await locator.fill(text);

  }
  static async selectOption(dropDown: Locator, text: string) {
    LogInfo(`Selecting option`,text,`from`,dropDown.toString());
    return await dropDown.selectOption({ label: text });
  }
  static async check(locator: Locator) {
    LogInfo(`Checking`,locator.toString());
    return await locator.check();
  }
}


