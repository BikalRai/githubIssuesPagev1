export const range = (total, limit) => {
    const pages = [];
    for (let i = 1; i <= Math.ceil(total / limit); i++) {
        pages.push(i);
    }
    return pages;
};
