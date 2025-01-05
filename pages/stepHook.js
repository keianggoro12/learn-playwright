const { expect } = require("@playwright/test");

exports.stepLogin = class stepLogin {
  constructor(page) {
    //tulis disini element nya
    this.page = page;
  }

  // ==========================================================================================

  // Open URL
  async openUrl(url) {
    await this.page.goto(url);
  }

  // TULIS DISINI METHOD NYA
};
