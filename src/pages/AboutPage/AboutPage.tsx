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
        Cette grande aventure a commencé au début du collège, alors que je me suis prise de passion pour les mangas que je lisais dans la petite bibliothèque de mon école. J'ai
        adoré ce style de dessin. Depuis je m'accroche à ce rêve si fou de pouvoir un jour devenir mangaka ou illustratrice. Mais le chemin n'est pas encore fini... Dans cet
        objectif, j'ai rejoint une école de manga et d'illustration à Toulouse depuis 2024, et je poursuis désormais mon apprentissage en vue de devenir professionnelle et d'être
        fière de mon travail.
      </Typography>

      <Typography
        variant="body1"
        sx={{
          fontSize: { xs: "0.95rem", sm: "1rem", md: "1.05rem" },
          lineHeight: { xs: 1.6, md: 1.75 },
          mb: { xs: 3, md: 4 }
        }}
      >
        Si vous souhaitez suivre mon aventure, et même me soutenir, c'est avec un grand plaisir !
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
