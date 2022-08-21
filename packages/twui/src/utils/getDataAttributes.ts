export const getDataAttributes = (
  object: object = {}
): Record<string, string> =>
  Object.fromEntries(
    Object.entries(object)?.filter(([key]) =>
      key?.toString().startsWith("data-")
    )
  );
