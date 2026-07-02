import { Box, /*Chip,*/ Container, Typography } from "@mui/material";

// const tags = ["Illustration", "Manga", "Peinture", "AAAA", "BBBB"] as const;

/**
 * About me page
 */
export default function AboutPage() {
  return (
    <Container
      maxWidth="md"
      sx={{
        my: { xs: "8%", sm: "10%" },
        px: { xs: 2, sm: 3, md: 4 }
      }}
    >
      {/* TODO: configurable par CMS */}
      <Typography
        variant="body1"
        sx={{
          fontWeight: "bold",
          fontSize: { xs: "1rem", sm: "1.125rem", md: "1.25rem" },
          mb: { xs: 2, md: 3 }
        }}
      >
        Je suis une artiste, illustratrice et mangaka amateure.
      </Typography>

      <Typography
        variant="body1"
        sx={{
          fontSize: { xs: "0.95rem", sm: "1rem", md: "1.05rem" },
          lineHeight: { xs: 1.6, md: 1.75 },
          mb: { xs: 2, md: 3 },
          textAlign: { xs: "left", md: "justify" }
        }}
      >
        Je suis une artiste, illustratrice, concept art, et aspirante mangaka.

Cette grande aventure a commencé au collège, lorsque je me suis découvert une véritable passion pour les mangas que je dévorais dans la petite bibliothèque de mon établissement. Fascinée par leur univers et leur style graphique, j'ai très vite commencé à rêver de créer les miens.

Pour moi, le dessin est bien plus qu'une discipline artistique : c'est un langage. Chaque illustration, chaque personnage et chaque projet est une occasion d'explorer mon imagination, de raconter des histoires et de transmettre des émotions. Je suis convaincue que l'art a le pouvoir de faire rêver, d'inspirer, de faire réfléchir et, parfois, d'aider une personne à avancer dans sa propre vie à travers les récits et les images qui les accompagnent.

Je puise également mon inspiration dans la philosophie, la psychologie et le développement personnel. Comprendre l'être humain, ses émotions et sa manière d'appréhender le monde nourrit ma créativité et influence profondément les univers que je construis.


Depuis, je poursuis ce rêve un peu fou : devenir un jour artiste professionnelle. Mon ambition est de travailler comme illustratrice, mangaka, ou bien encore concept art spécialisé dans les décors (background artist) pour le jeu vidéo ou l'animation. Le chemin est encore long, mais chaque je me rapproche petit à petit de cet objectif. 

Depuis 2024, j'ai intégré une école de manga et d'illustration à Toulouse, où je continue à apprendre, à progresser et à développer mon univers afin de vivre un jour de ma passion et d'être fière de mon travail.

Si vous souhaitez suivre mon aventure, découvrir mes créations ou même me soutenir, ce sera avec un immense plaisir ! Votre soutien, qu'il s'agisse d'un simple regard, d'un commentaire ou d'un partage, m'encourage à continuer à créer et à poursuivre ce rêve qui m'anime depuis tant d'années. ♥

      </Typography>

      <Typography
        variant="body1"
        sx={{
          fontSize: { xs: "0.95rem", sm: "1rem", md: "1.05rem" },
          lineHeight: { xs: 1.6, md: 1.75 },
          mb: { xs: 3, md: 4 }
        }}
      >
    test
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: { xs: 0.75, sm: 1 },
          mt: { xs: 2, md: 3 }
        }}
      >
        {/* {tags.map((tag) => (
          <Chip
            key={tag}
            label={tag}
            color="primary"
            variant="outlined"
            sx={{
              fontSize: { xs: "0.75rem", sm: "0.8125rem" },
              height: { xs: 28, sm: 32 }
            }}
          />
        ))} */}
      </Box>
    </Container>
  );
}
