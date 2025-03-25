import { Page,Browser } from "@playwright/test";

export class BrowserAction{
  
 
static async  goto(page:Page,url:string){
  return await  page.goto(url);
}
 static async  goBack(page:Page) {
  return await page.goBack();
}
 static async  goForward(page:Page) {
  return await page.goForward();
}
static async  getPageTitle(page:Page){
  await page.waitForLoadState('load');
  return  await page.title();
}
}
