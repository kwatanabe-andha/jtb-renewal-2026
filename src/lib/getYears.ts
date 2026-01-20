export const getYears = (): number[] => {
  const startYear = 2005
  const currentYear = new Date().getFullYear()

  const years: number[] = Array.from(
    { length: currentYear - startYear + 1 },
    (_, i) => startYear + i
  )

  return years
}