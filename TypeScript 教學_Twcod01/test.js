function employee(id, name) {
    this.id = id;
    this.name = name;
}
var emp = new employee(123, "admin");
employee.prototype.email = "test@mail";
console.log("員工號: " + emp.id);
console.log("員工姓名: " + emp.name);
console.log("員工郵箱: " + emp['email']);
