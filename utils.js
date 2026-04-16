export const greet = (name) => {
    return `Hello ${name}`
};

export const describe = (ext) => {
    return `${ext.name} v${ext.version} - runs on ${ext.target}`;
};