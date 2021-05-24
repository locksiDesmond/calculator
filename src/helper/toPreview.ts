export const message = {
  dumb: 'you are just too dumb',
  stupid: 'you gotta be kidding me 🤣',
};
const toPreview = (input: string) => {
  if (input === '1+1') {
    return message.dumb;
  } else if (input === '0+0') {
    return message.stupid;
  } else {
    let result = input.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');

    result = result.toString().replace(/[*]/g, ' X ');
    return result;
  }
};
export default toPreview;
