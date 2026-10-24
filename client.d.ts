declare module '*.xlsx' {
  const sheets: {
    sheet: string;
    data: (string | number | boolean | null)[][];
  }[];
  export default sheets;
}
