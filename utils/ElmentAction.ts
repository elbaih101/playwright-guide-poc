import { Page,Browser, Locator } from "@playwright/test";

export class BrowserAction{
  
 
static async  click(locator:Locator){
  return await  locator.click;
}
 static async  getText(locator:Locator) {
  return await locator.textContent;
}
 static async  goForward(page:Page) {
  return await page.goForward;
}
 static async navigateTo(page:Page,url:string){

}
}
