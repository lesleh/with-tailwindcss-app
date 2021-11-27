import Head from "next/head";
import { Heading, Link, Text } from "../components";

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <>
          <Heading key={i} element={`h${i}`}>
            Heading {i}
          </Heading>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            maxime earum nulla unde omnis ad maiores dicta dolorem rerum
            deleniti sapiente quaerat, culpa accusamus. Sequi, eius temporibus?
            Molestiae, dolorum autem!
          </Text>
        </>
      ))}
    </div>
  );
}
