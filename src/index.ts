import axios from "axios";
import express, { Express, Request, Response } from "express";
import _groupBy from 'lodash/groupBy'

const app: Express = express();
const port = 9000;

const url = 'https://dummyjson.com/users'

type ResponseType = {
  male: number,
  female: number,
  ageRange: string,
  hair: Record<string, number>,
  addressUser: Record<string, string>,
}

app.get("/", async (req: Request, res: Response) => {
  const result = await axios.get(url)

  const resultGrouped = _groupBy(result.data.users, (item) => item.company.department)

  const responseResult: Record<string, ResponseType> = {}
  Object.keys(resultGrouped).forEach((key) => {

    let minAge = 9999
    let maxAge = 0
    const transformed = resultGrouped[key].reduce((acc: ResponseType, cur) => {
      //* Gender
      acc.female += cur.gender === 'female' ? 1 : 0
      acc.male += cur.gender === 'male' ? 1 : 0

      //* Age range
      if (cur.age < minAge) minAge = cur.age
      if (cur.age > maxAge) maxAge = cur.age
      acc.ageRange = `${minAge}-${maxAge}`

      //* Hair color
      if (cur.hair.color) {
        if (!acc.hair[cur.hair.color]) acc.hair[cur.hair.color] = 1
        acc.hair[cur.hair.color]++
      }

      //* Address user
      acc.addressUser[`${cur.firstName}${cur.lastName}`] = cur.address.postalCode

      return acc
    }, {
      male: 0,
      female: 0,
      ageRange: "",
      hair: {},
      addressUser: {},
    } as ResponseType)

    responseResult[key] = transformed
  })

  res.json(responseResult)
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});