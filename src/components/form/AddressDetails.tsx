import {
  Autocomplete,
  Button,
  FormControl,
  FormLabel,
  TextField,
} from "@mui/material";
import * as yup from "yup";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../../redux/store/storeHook";
import { RootState } from "../../redux/store/store";
import { stepActions } from "../../redux/slices/step/stepSlice";
import { yupResolver } from "@hookform/resolvers/yup";
import { dataActions } from "../../redux/slices/data/dataSlice";

type Props = {
  setHold: React.Dispatch<React.SetStateAction<boolean>>;
};

const AddressDetails = ({ setHold }: Props) => {
  const { formData } = useAppSelector((state: RootState) => state.form);
  const { index } = useAppSelector((state: RootState) => state.step);
  const { dataArray } = useAppSelector((state: RootState) => state.data);
  const [countries, setCountries] = useState([]);
  const addressSchema = yup.object({
    address: yup.string(),
    city: yup.string(),
    pincode: yup.string(),
    street: yup.string(),
    country: yup.string().required(),
  });
  const dispatch = useAppDispatch();
  const { register, handleSubmit } = useForm({
    defaultValues: formData,
    resolver: yupResolver(addressSchema),
  });

  function submit(data: any) {
    const newData = [...dataArray, data];
    dispatch(dataActions.setData(newData));
    dispatch(stepActions.incrementIndex(0));
  }

  useEffect(() => {
    const fetchCountries = async () => {
      fetch(`https://restcountries.com/v3.1/all`)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }

          return response.json();
        })
        .then((data) => {
          let array: any = [];
          data.map((country: any, idx: string) => {
            const countryObject: {
              label: string;
              value: string;
            } = { label: "", value: "" };
            country.id = idx;
            countryObject.label = country.name.common;
            countryObject.value = country.name.common;
            array.push(countryObject);
          });
          setCountries(array);
        })
        .catch((error) => {
          console.error("Fetch error:", error);
        });
    };
    fetchCountries();
  }, []);

  return (
    <form className="w-[30rem]" onSubmit={handleSubmit(submit)}>
      <p className="text-2xl">Address Details</p>
      <div className="flex w-full flex-col">
        <FormControl>
          <FormLabel htmlFor={"name"}>Address</FormLabel>
          <TextField {...register("address")} margin="normal" />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor={"street"}>Street</FormLabel>
          <TextField {...register("street")} margin="normal" />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor={"city"}>City</FormLabel>
          <TextField {...register("city")} margin="normal" />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor={"pincode"}>Pincode</FormLabel>
          <TextField {...register("pincode")} margin="normal" />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor={"country"}>Country</FormLabel>
          <Autocomplete
            options={countries}
            isOptionEqualToValue={(option: any, value: any) =>
              option.id === value.id
            }
            renderInput={(params) => (
              <TextField {...params} {...register("country")} />
            )}
          />
        </FormControl>
        {/* <FormControl>
          <FormLabel htmlFor={"country"}>Country</FormLabel>
          <TextField {...register("country")} margin="normal" />
        </FormControl> */}
      </div>
      <div className="flex flex-row justify-between">
        <Button
          variant="contained"
          color="primary"
          disabled={index == 0}
          onClick={() => {
            dispatch(stepActions.decrementIndex(0));
          }}
        >
          Previous
        </Button>

        <Button type="submit" variant="contained" color="primary">
          {index < 1 ? "Next" : "Submit"}
        </Button>
      </div>
    </form>
  );
};

export default AddressDetails;

const top100Films = [
  { label: "The Shawshank Redemption", year: 1994 },
  { label: "The Godfather", year: 1972 },
  { label: "The Godfather: Part II", year: 1974 },
  { label: "The Dark Knight", year: 2008 },
  { label: "12 Angry Men", year: 1957 },
  { label: "Schindler's List", year: 1993 },
  { label: "Pulp Fiction", year: 1994 },
  {
    label: "The Lord of the Rings: The Return of the King",
    year: 2003,
  },
  { label: "The Good, the Bad and the Ugly", year: 1966 },
  { label: "Fight Club", year: 1999 },
  {
    label: "The Lord of the Rings: The Fellowship of the Ring",
    year: 2001,
  },
  {
    label: "Star Wars: Episode V - The Empire Strikes Back",
    year: 1980,
  },
  { label: "Forrest Gump", year: 1994 },
  { label: "Inception", year: 2010 },
  {
    label: "The Lord of the Rings: The Two Towers",
    year: 2002,
  },
  { label: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { label: "Goodfellas", year: 1990 },
  { label: "The Matrix", year: 1999 },
  { label: "Seven Samurai", year: 1954 },
  {
    label: "Star Wars: Episode IV - A New Hope",
    year: 1977,
  },
  { label: "City of God", year: 2002 },
  { label: "Se7en", year: 1995 },
  { label: "The Silence of the Lambs", year: 1991 },
  { label: "It's a Wonderful Life", year: 1946 },
  { label: "Life Is Beautiful", year: 1997 },
  { label: "The Usual Suspects", year: 1995 },
  { label: "Léon: The Professional", year: 1994 },
  { label: "Spirited Away", year: 2001 },
  { label: "Saving Private Ryan", year: 1998 },
  { label: "Once Upon a Time in the West", year: 1968 },
  { label: "American History X", year: 1998 },
  { label: "Interstellar", year: 2014 },
  { label: "Casablanca", year: 1942 },
  { label: "City Lights", year: 1931 },
  { label: "Psycho", year: 1960 },
  { label: "The Green Mile", year: 1999 },
  { label: "The Intouchables", year: 2011 },
  { label: "Modern Times", year: 1936 },
  { label: "Raiders of the Lost Ark", year: 1981 },
  { label: "Rear Window", year: 1954 },
  { label: "The Pianist", year: 2002 },
  { label: "The Departed", year: 2006 },
  { label: "Terminator 2: Judgment Day", year: 1991 },
  { label: "Back to the Future", year: 1985 },
  { label: "Whiplash", year: 2014 },
  { label: "Gladiator", year: 2000 },
  { label: "Memento", year: 2000 },
  { label: "The Prestige", year: 2006 },
  { label: "The Lion King", year: 1994 },
  { label: "Apocalypse Now", year: 1979 },
  { label: "Alien", year: 1979 },
  { label: "Sunset Boulevard", year: 1950 },
  {
    label:
      "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",
    year: 1964,
  },
  { label: "The Great Dictator", year: 1940 },
  { label: "Cinema Paradiso", year: 1988 },
  { label: "The Lives of Others", year: 2006 },
  { label: "Grave of the Fireflies", year: 1988 },
  { label: "Paths of Glory", year: 1957 },
  { label: "Django Unchained", year: 2012 },
  { label: "The Shining", year: 1980 },
  { label: "WALL·E", year: 2008 },
  { label: "American Beauty", year: 1999 },
  { label: "The Dark Knight Rises", year: 2012 },
  { label: "Princess Mononoke", year: 1997 },
  { label: "Aliens", year: 1986 },
  { label: "Oldboy", year: 2003 },
  { label: "Once Upon a Time in America", year: 1984 },
  { label: "Witness for the Prosecution", year: 1957 },
  { label: "Das Boot", year: 1981 },
  { label: "Citizen Kane", year: 1941 },
  { label: "North by Northwest", year: 1959 },
  { label: "Vertigo", year: 1958 },
  {
    label: "Star Wars: Episode VI - Return of the Jedi",
    year: 1983,
  },
  { label: "Reservoir Dogs", year: 1992 },
  { label: "Braveheart", year: 1995 },
  { label: "M", year: 1931 },
  { label: "Requiem for a Dream", year: 2000 },
  { label: "Amélie", year: 2001 },
  { label: "A Clockwork Orange", year: 1971 },
  { label: "Like Stars on Earth", year: 2007 },
  { label: "Taxi Driver", year: 1976 },
  { label: "Lawrence of Arabia", year: 1962 },
  { label: "Double Indemnity", year: 1944 },
  {
    label: "Eternal Sunshine of the Spotless Mind",
    year: 2004,
  },
  { label: "Amadeus", year: 1984 },
  { label: "To Kill a Mockingbird", year: 1962 },
  { label: "Toy Story 3", year: 2010 },
  { label: "Logan", year: 2017 },
  { label: "Full Metal Jacket", year: 1987 },
  { label: "Dangal", year: 2016 },
  { label: "The Sting", year: 1973 },
  { label: "2001: A Space Odyssey", year: 1968 },
  { label: "Singin' in the Rain", year: 1952 },
  { label: "Toy Story", year: 1995 },
  { label: "Bicycle Thieves", year: 1948 },
  { label: "The Kid", year: 1921 },
  { label: "Inglourious Basterds", year: 2009 },
  { label: "Snatch", year: 2000 },
  { label: "3 Idiots", year: 2009 },
  { label: "Monty Python and the Holy Grail", year: 1975 },
];
