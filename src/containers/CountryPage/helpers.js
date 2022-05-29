export const valueToString = (value) => value.join(', ');
export const valueFromObj = (prop, value = '') => {
    let values = [];
    for (const key in prop) {
        values.push(prop[key][value]);
    }

    return valueToString(values);
};
export const valueInfo = (prop, value = '') => {
    let values = [];

      for (const key in prop) {
        values.push(prop[key]);
      }

      return valueToString(values);
    }