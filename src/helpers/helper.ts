export const convertToSimpleDate = (lastCommentDate: string) => {
    const date = new Date(lastCommentDate);
    const simpleDate = date.toLocaleDateString();

    return simpleDate
}