export const reactive = (data) => {
  const track = (target, prop, receiver) => {
    console.log("Data Get: ", target, prop, receiver);
  };
  const trigger = (target, key, value, receiver) => {
    console.log("Data Change: ", target, key, value, receiver);
  };
  const watch = (target, key, value, receiver) => {
    console.log("Data Set: ", target, key, value, receiver);
  };
  const handler = {
    get(target, prop, receiver) {
      track(target, prop, receiver);
      return Reflect.get(target, prop, receiver);
    },
    set(target, key, value, receiver) {
      watch(target, key, value, receiver);
      if (target[key] != value) {
        trigger(target, key, value, receiver);
      }
      return Reflect.set(target, key, value, receiver);
    },
  };

  const proxy = new Proxy(data, handler);

  return proxy;
};

export const request = async (endpoint) => {
  try {
    const response = await fetch(endpoint);
    const json = await response.json();
    return { json };
  } catch (exception) {
    console.error(exception);
  }
};
