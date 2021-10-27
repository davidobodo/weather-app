import styled from "styled-components";

export const StyledSingleCity = styled.main`
    // padding: 5rem;
    display: flex;
    min-height: calc(100vh - 8rem);

    background-size: cover;
    background-repeat: no-repeat;
    background-position: bottom;
    // background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    // url("https://images.unsplash.com/photo-1584267385494-9fdd9a71ad75?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8d2VhdGhlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60");

    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
        url("https://media.istockphoto.com/photos/transparent-umbrella-under-rain-against-water-drops-splash-background-picture-id1257951336?b=1&k=20&m=1257951336&s=170667a&w=0&h=N_dkdVEznSiN43vNpVzjnnk8xUi4lg1IFK19JXxo5Zg=");

    .single-city__left-column {
        flex: 1;
        // margin-right: 6.4rem;
        padding: 6rem;
    }

    .single-city__right-column {
        width: 40rem;
        flex-shrink: 0;
        position: relative;

        .blurred-bg {
            position: absolute;
            top: 0px;
            left: 0px;
            height: 100%;
            width: 100%;
            filter: blur(4px);
            z-index: 1;
            background-size: cover;
            background-repeat: no-repeat;
            background-position: bottom;
            background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
                url("https://media.istockphoto.com/photos/transparent-umbrella-under-rain-against-water-drops-splash-background-picture-id1257951336?b=1&k=20&m=1257951336&s=170667a&w=0&h=N_dkdVEznSiN43vNpVzjnnk8xUi4lg1IFK19JXxo5Zg=");
        }

        &__content {
            position: relative;
            z-index: 2;
            padding: 6rem 3rem;
        }

        .btn-favourite {
            margin-bottom: 2.4rem;
        }

        &__cta {
            display: flex;
            justify-content: flex-end;

            button:nth-child(1) {
                margin-right: 1rem;
            }
        }
    }

    .form-field {
        display: flex;
        flex-direction: column;

        label {
            font-size: 1.6rem;
            margin-bottom: 1.2rem;
            color: #fff;
            text-transform: capitalize;
        }

        textarea {
            border: 1px solid ${({ theme }) => theme.colors.ash};
            border-radius: 1rem;
            margin-bottom: 2.4rem;
            resize: none;
        }
    }
`;
