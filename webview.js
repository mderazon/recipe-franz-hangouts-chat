module.exports = Franz => {
  const getMessages = function getMessages() {
    let total = [...document.querySelectorAll('span[aria-hidden="true"]')]
      .filter(
        el =>
          el.nextSibling &&
          el.nextSibling.innerHTML.indexOf('Notification') !== -1
      )
      .map(el => parseInt(el.innerHTML, 10) || 0)
      .reduce((prev, curr) => prev + curr);

    Franz.setBadge(total);
  };

  Franz.loop(getMessages);
};
