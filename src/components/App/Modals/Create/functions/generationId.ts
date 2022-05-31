export function generationId(ids: Array<number> | null) {
  if (!ids) return 1;
  let randomId = Math.floor(Math.random() * 100) + 1;
  const duplicateId = ids.find((id) => id === randomId);

  if (duplicateId) {
    randomId = generationId(ids);
  }

  return randomId;
}
