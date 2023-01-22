export const calcDate = (date) => {
    let status = '';

    // current time
    const now = new Date().getTime();

    // created date
    const createdDate = new Date(date);

    // calculate to minutes
    const timeDiff = Math.floor((now - createdDate) / (1000 * 60));
    console.log(timeDiff, 'minutes');

    const hours = Math.floor(timeDiff / (60 * 60));
    const days = Math.floor(timeDiff / (60 * 60 * 24));
    const weeks = Math.floor(timeDiff / (60 * 60 * 24 * 7));
    const months = Math.floor(timeDiff / (60 * 60 * 24 * 7 * 4));

    if (timeDiff < 1) {
        status = `just now`;
    } else if (timeDiff < 60) {
        status = `${timeDiff} minute(s) ago`;
    } else if (hours < 24) {
        status = `${hours} hour(s) ago`;
    } else if (days < 7) {
        status = `${days} day(s) ago`;
    } else if (weeks === 1) {
        status = `last week`;
    } else if (weeks > 1 && weeks < 4) {
        status = `${weeks} weeks ago`;
    } else if (months === 1) {
        status = `last month`;
    } else {
        status = `${new Date(date).getMonth()}`;
    }

    return status;
};
