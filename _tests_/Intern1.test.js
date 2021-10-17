const Intern = require("../lib/Intern1")

test("Can you set a name for the intern?", () => {
    const intern = new Intern("Smiley")

    expect(intern.name).toBe("Smiley");
});

test("Can you set an ID for the intern?", () => {
    const intern = new Intern("Ravioli-san", 300);

    expect(intern.ID).toBe(300);
})

test("Can you set an  email for intern?", () => {
    const intern = new Intern("Skip", 2, "busybeeintern1@gmail.com");

    expect(intern.email).toBe("busybeeintern1@gmail.com");
})

test("Can you set a school for intern?", () => {
    const intern = new Intern("Seamus", 56, "busybeeintern1@gmail.com", "Valorant Tech");

    expect(intern.school).toBe("Valorant Tech");
})