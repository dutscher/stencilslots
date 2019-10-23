const Fragment = (_props, children = []) => {
    console.log(children);
    return [...children];
};

export { Fragment as F };
