export class EditorStore {
  data: Map<string, any>;
  group: Map<string, Array<string>>;

  constructor() {
    this.data = new Map();
    this.group = new Map();
  }

  // 添加组件到菜单
  register(name: string, obj: any, groupName: string) {
    if (!this.group.has(groupName)) {
      console.warn(`组${groupName}不存在`);
      `组${groupName}不存在`;
    } else {
      obj.originName = name;
      this.data.set(name, obj);

      const groups: string[] | undefined = this.group.get(groupName);
      if (groups) {
        this.group.set(
          groupName,
          groups.concat(Array.isArray(name) ? name : [name])
        );
      } else {
        console.warn("groups is undefined");
      }
    }
  }

  // 添加菜单
  addToGroup(groupName: string) {
    this.group.set(groupName, []);
    console.log("sssssss", groupName, this.group.size);
  }

  // 获取组件
  get(name: string) {
    return this.data.get(name);
  }

  // 获取所有组件的名称
  getNames() {
    return Array.from(this.data.keys());
  }

  // 获取菜单
  getGroups() {
    return Array.from(this.group.keys());
  }

  //  获取所有组件
  getObjs(names: Array<any> = []) {
    return names.length
      ? names.map(this.get.bind(this))
      : Array.from(this.data.values());
  }

  // 获取菜单下所有组件
  getObjsByGroup(group: string) {
    const names = this.group.get(group);
    return this.getObjs(names);
  }
}
