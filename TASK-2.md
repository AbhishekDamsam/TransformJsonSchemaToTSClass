# Second task

In the second task you are required to write the implementation for the
`convert` method that you can find within `src/second.ts` file.

The requirement for this task is to convert a mongoose model's schema into its
equivalent TypeScript interface. Do not worry, you do not have to be an expert
in TypeScript to do so. In case you are unfamiliar with TypeScript, think about
this task as a data transformation activity, where a structured input needs to
be transformed into another structure, which is a `string` in this case.

For this part, you can refer the file `src/data/nested.json`. The expected
output for that input would be following

```ts
export interface Listing {
  __v?: number;
  _id?: ObjectID;
  address?: {
    city?: string;
    districts?: string[];
    location?: any;
    street?: string;
    streetNumber?: string;
    zipCode?: string;
  };
  apartmentName?: string;
  availableFrom?: Date;
  availableTo?: Date;
  createdAt?: Date;
  deleted?: boolean;
  deposit?: number;
  description?: string;
  floor?: number;
  geoBookings?: any;
  images?: string[];
  landlord: ObjectID;
  lastPublishedAt?: Date;
  price?: number;
  published?: boolean;
  rooms?: number;
  score?: number;
  status?: "UNPUBLISHED" | "INACTIVE" | "DELETED" | "PUBLISHED" | "0";
  titleDE: string;
  titleEN: string;
  updatedAt?: Date;
}
```

# Validate the solution

We have basic test cases written inside `src/second.spec.ts` file. Once you are
done with the implementation, just run the following command to check if the test cases are passing or not -

```sh
$ yarn test:second || npm run test:second
```
