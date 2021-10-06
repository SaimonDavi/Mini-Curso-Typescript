// AccountInfo
// CharInfo
// PlayerInfo

type AccountInfo = {
  id: number | string,
  name: string,
  email?: string
}

const account: AccountInfo = {
  id: 123,
  name: "Willian"
}

type CharInfo = {
  nickname: string,
  level: number
}

const char: CharInfo = {
  nickname: "willjusten",
  level: 100
}

// intersection
type PlayerInfo = AccountInfo & CharInfo;

const player: PlayerInfo = {
  id: "123",
  name: "Willian",
  nickname: "willjusten",
  level: 100
}