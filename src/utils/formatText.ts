export const formatCamelCaseToDisplay = (str: string) => {
  return (
    str.charAt(0).toUpperCase() +
    str.slice(1).replace(/[A-Z]/g, (match) => ` ${match.toLowerCase()}`)
  );
};
