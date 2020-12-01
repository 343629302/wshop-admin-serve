//成功回调
export function success(other: any = {}) {
  const obj = Object.assign(other, {
    type: 'success',
  });
  return obj;
}
