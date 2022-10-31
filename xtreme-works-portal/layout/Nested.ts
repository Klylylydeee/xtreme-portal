const NestLayout = (parent, child) => (page) => parent(child(page));

const NestedNestLayout = (grandparent, parent, child) => (page) => grandparent(parent(child(page)));

export { NestLayout, NestedNestLayout};
