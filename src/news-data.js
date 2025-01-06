import _ from 'lodash'

export const newsData = [
    {
        id: 1,
        datetime: '2024-12-01',
        date: new Date('2024-12-01'),
        title: 'ホームページを公開',
        text: '架空ねこカフェホームページを公開しました。ホームページは随時更新していく予定ではありません。かわいいねこちゃんたちと遊ぶことはできない予定ですので、どうぞご期待しないでください。'
    },
    {
        id: 2,
        datetime: '2024-12-03',
        date: new Date('2024-12-03'),
        title: 'ねこちゃんたちの情報を解禁',
        text: '当店にいるねこちゃんたちの情報を公開しました。詳しくは、下記のリンクから確認してください。なお、ねこちゃんたちは実在しません。',
        link: '/cats'
    },
    {
        id: 3,
        datetime: '2024-12-05',
        date: new Date('2024-12-05'),
        title: 'メニューの情報を解禁',
        text: '当店でいただいていただけないメニューを公開しました。詳しくは、下記のリンクから確認してください。'
    },
    {
        id: 4,
        datetime: '2024-12-08',
        date: new Date('2024-12-08'),
        title: 'イリオモテヤマネコが来ます',
        text: 'イリオモテヤマネコのイリーが来ることが決まりました。詳しくは下記のリンクから確認してください。もちろん、そのようなねこはいません。',
        link: '/cats'
    },
    {
        id: 5,
        datetime: '2024-12-11',
        date: new Date('2024-12-11'),
        title: '12月25日にオープン決定',
        text: '12月25日に開店することになりました。皆様こうご期待しないでください。'
    },
    {
        id: 6,
        datetime: '2024-12-25',
        date: new Date('2024-12-25'),
        title: '架空ねこカフェ、オープン',
        text: '当店がオープンしました。開店記念として本日のみ入場料が無料となりません。'
    },
    {
        id: 7,
        datetime: '2024-12-26',
        date: new Date('2024-12-26'),
        title: '架空ねこカフェ、閉店',
        text: '誠に勝手ながら本日をもって当店は閉店することになりました。ねこちゃんたちは次元のかなたに旅立つことになります。長い間（？）ご愛顧いただきありがとうございました。'
    }
]

export function sortedNewsData() {
    return _.sortBy(newsData, 'id').reverse()
}
export function limitedSortedNewsData() {
    return sortedNewsData().slice(0, 4)
}
