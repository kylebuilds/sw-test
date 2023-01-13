import { gql } from '@apollo/client';
export const allFilms = gql`
    query AllFilms {
        films(order: [releaseDate_ASC]) {
            results{
                releaseDate
                title
                characters {
                    results {
                        name
                    }
                }
                planets {
                    results {
                        name
                    }
                }
            }
        }
    }
`;