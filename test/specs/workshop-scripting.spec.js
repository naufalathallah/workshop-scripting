describe("Fitur Autentikasi", () => {
  it("[key: TCW-111] [APP] User dapat melakukan login", async () => {
    // Code disini ya...
    await driver.switchContext("NATIVE_APP");

    await $(`~Email`).click();

    // isi email
    await $(
      "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[5]/android.widget.EditText"
    ).click();
    await $(
      "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[5]/android.widget.EditText"
    ).setValue("Romaine691at@yopmail.com");
    await $(`~MASUK`).click();

    // isi password
    await $(
      "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.view.View/android.view.View[5]/android.widget.EditText"
    ).click();
    await $(
      "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.view.View/android.view.View[5]/android.widget.EditText"
    ).setValue("Tbautomate123!");
    await $(`~MASUK`).click();

    // ekspektasi
    await expect($(`~Selamat Datang di Teman Bumil`)).toBeDisplayed();
  });

  it("acc tnc", async () => {});

  it("close pop up", async () => {});

  it("menu", async () => {});

  it("menu", async () => {});

  it("menu", async () => {});

  it("menu", async () => {});

  it("logout", async () => {});
});
