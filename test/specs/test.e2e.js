describe("Akses Rekam Medis User MATERNITY", () => {
  after(async () => {
    await $(
      '//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[1]/android.widget.Button'
    ).click();
    await $("~PROFIL\nTab 5 of 5").click();
    await $(
      "android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)"
    );
    await $("~Logout").click();
    await $("~Ya").click();
    await driver.pause(3000);

    // Ekspetasi
    expect(
      $(
        "~Terpercaya\nSemua data Mums akan terjamin privasinya dan tidak disebarluaskan"
      )
    ).toBeDisplayed();

    console.log("=============\n SUDAH LOGOUT!");
  });

  it("should login with valid credentials", async () => {
    // Tutup Chucker
    await $("~Tidak").click();

    // Masukkan Email
    await $("~Email").click();
    await $("//android.widget.EditText").click();
    await $("//android.widget.EditText").setValue("macan.oneweek@yopmail.com");
    await $("//android.widget.ScrollView").click();
    await $("~MASUK").click();

    // Masukkan Password
    await $("//android.widget.EditText").click();
    await $("//android.widget.EditText").setValue("password");
    await $("//android.widget.ScrollView").click();
    await $("~MASUK").click();

    // Ekspetasi
    expect($("~Selamat Datang di Teman Bumil")).toBeDisplayed();

    console.log("=============\n SUDAH LOGIN!");
  });

  it("Tutup Media", async () => {
    const isDisplayed = await $("//android.webkit.WebView").isDisplayed();
    console.log("=============\n MEDIA TAMPIL: ", isDisplayed);
    if (isDisplayed) {
      await $(
        '//android.view.View[@content-desc="◍ LIVE"]/android.view.View[2]'
      ).click();
    }
  });

  it("Accept Popup TnC", async () => {
    await $("//android.widget.CheckBox").click();
    await $("~LANJUT").click();

    // Ekspetasi
    expect($("~Selamat Datang di Teman Bumil")).not.toBeDisplayed();

    console.log("=============\n SUDAH ACC POPUP TNC!");
  });

  it("Close Popup Banner", async () => {
    await driver.pause(3000);
    const isDisplayed = await $(
      '//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View[1]/android.view.View/android.view.View/android.widget.ImageView[2]'
    ).isDisplayed();
    console.log("==============\n PUB TAMPIL: ", isDisplayed);
    if (isDisplayed) {
      await $(
        '//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View[1]/android.view.View/android.view.View/android.widget.ImageView[2]'
      ).click();
    }

    // Ekspetasi
    expect($('~"Hi, "')).toBeDisplayed();

    console.log("=============\n SUDAH CLOSE PUB JIKA ADA!");
  });

  it("Close Coachmark Pilih Fase", async () => {
    await driver.pause(3000);
    const isDisplayed = await $("~Oke").isDisplayed();
    console.log(
      "================\n Coachmark Pilih Fase TAMPIL: ",
      isDisplayed
    );
    if (isDisplayed) {
      await $("~Oke").click();
    }

    // Ekspetasi: Nama Terdisplay di homepage
    await driver.pause(3000);
    expect($('~"User Fase Hamil"')).toBeDisplayed();

    console.log("=============\n SUDAH CLOSE PUB!");
  });

  it("Open Menu Rekam Medis from JPOPS", async () => {
    await $("~Rekam Medis").click();
    await driver.pause(3000);

    // Ekspetasi
    expect($('~"Rekam Medis"')).toBeDisplayed();
    expect($('~"Babyku"')).toBeDisplayed();

    console.log("=============\n SUDAH DISPLAY CARD REKAM MEDIS HAMIL & NB");
  });
});

describe("Akses Rekam Medis User NEWBORN", () => {
  it("should login with valid credentials", async () => {
    // Tutup Chucker
    const isDisplayed = await $("~Tidak").isDisplayed();
    console.log("==============\n CHUCKER TAMPIL: ", isDisplayed);
    if (isDisplayed) {
      await $("~Tidak").click();
    }

    // Masukkan Email
    await $("~Email").click();
    await $("//android.widget.EditText").click();
    await $("//android.widget.EditText").setValue("macan.onemonth@yopmail.com");
    await $("//android.widget.ScrollView").click();
    await $("~MASUK").click();

    // Masukkan Password
    await $("//android.widget.EditText").click();
    await $("//android.widget.EditText").setValue("password");
    await $("//android.widget.ScrollView").click();
    await $("~MASUK").click();

    // Ekspetasi
    expect($("~Selamat Datang di Teman Bumil")).toBeDisplayed();

    console.log("=============\n SUDAH LOGIN!");
  });

  it("Tutup Media", async () => {
    const isDisplayed = await $("//android.webkit.WebView").isDisplayed();
    console.log("=============\n MEDIA TAMPIL: ", isDisplayed);
    if (isDisplayed) {
      await $(
        '//android.view.View[@content-desc="◍ LIVE"]/android.view.View[2]'
      ).click();
    }
  });

  it("Accept Popup TnC", async () => {
    await $("//android.widget.CheckBox").click();
    await $("~LANJUT").click();

    // Ekspetasi
    expect($("~Selamat Datang di Teman Bumil")).not.toBeDisplayed();

    console.log("=============\n SUDAH ACC POPUP TNC!");
  });

  it("Close Popup Banner", async () => {
    await driver.pause(3000);
    const isDisplayed = await $(
      '//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View[1]/android.view.View/android.view.View/android.widget.ImageView[2]'
    ).isDisplayed();
    console.log("==============\n PUB TAMPIL: ", isDisplayed);
    if (isDisplayed) {
      await $(
        '//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View[1]/android.view.View/android.view.View/android.widget.ImageView[2]'
      ).click();
    }

    // Ekspetasi
    expect($('~"Hi, "')).toBeDisplayed();

    console.log("=============\n SUDAH CLOSE PUB JIKA ADA!");
  });

  it("Close Coachmark Pilih Fase", async () => {
    await driver.pause(3000);
    const isDisplayed = await $("~Oke").isDisplayed();
    console.log(
      "================\n Coachmark Pilih Fase TAMPIL: ",
      isDisplayed
    );
    if (isDisplayed) {
      await $("~Oke").click();
    }

    // Ekspetasi: Nama Terdisplay di homepage
    await driver.pause(3000);
    expect($('~"User Fase NB"')).toBeDisplayed();

    console.log("=============\n SUDAH CLOSE PUB!");
  });

  it("Open Menu Rekam Medis from JPOPS", async () => {
    await $("~Rekam Medis").click();
    await driver.pause(3000);

    // Ekspetasi
    expect($('~"Rekam Medis"')).toBeDisplayed();
    expect($('~"babababba"')).toBeDisplayed();

    console.log("=============\n SUDAH DISPLAY CARD REKAM MEDIS NB");
  });
});
