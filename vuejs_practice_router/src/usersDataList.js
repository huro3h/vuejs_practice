// HTML上のDOM要素のidを指定
export const getUsers = function (callback) {
  setTimeout(function () {
    callback(null, usersDataList)
  }, 2000)
}

export const usersDataList = [
  {
    id: 1,
    name: 'Taro Hoge',
    description: '3食昼寝付き'
  },
  {
    id: 2,
    name: 'Takashi Hoge',
    description: '深酒部 部長'
  }
]
