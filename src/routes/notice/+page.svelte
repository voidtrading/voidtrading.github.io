<script>
    import notices from "$lib/Notice";
</script>

<svelte:head>
    <title>VOID TRADING — Notices</title>
</svelte:head>

<div class="container">
    <main>
        <h1>Notice</h1>
        <div class="noticeContainer">
            <div class="notices">
                {#each notices as notice}
                    <div class="notice">
                        <div class="header">
                            <h2>
                                {notice.title}
                            </h2>
                            <div class="authorContainer">
                                작성:
        <!--                        <div class="author">-->
                                    {#each notice.author as author}
                                        <div>{author}</div>
                                    {/each}
                                    <div>({notice.date})</div>
        <!--                        </div>-->
                            </div>
                        </div>
                        <p>
                            {notice.description}
                        </p>
                        <a href={notice.appendix_path} target="_blank" rel="noreferrer">
                            <div class="button">첨부파일 ({notice.appendix_name})</div>
                        </a>
                    </div>
                    <div class="line"></div>
                {/each}
            </div>
        </div>
    </main>
</div>

<style>
    .container {
        max-width: 900px;
        padding: 20px;
        display: flex;
        justify-content: center;
    }

    main {
        max-width: 100%;
        /*padding: 15px;*/
        min-height: 500px;
        text-align: left;
        margin: 0 auto;
        box-sizing: border-box;
    }

    h1 {
        font-weight: 700;
        margin: 0 0 35px 0;
        font-size: 36px;
        text-align: start;
    }

    h2 {
        margin-top: 5px;
    }

    .noticeContainer {
        width: 100%;
        max-width: 900px;
        display: flex;
        justify-content: center;
        box-sizing: border-box;
        text-align: center;
        padding: 1em;
        margin: 0 auto;
        text-align: center;
    }

    a {
        text-decoration: none;
    }

    .noticeContainer .notices {
        display: grid;
        grid-template-columns: 1fr;
        /*grid-gap: 40px;*/
        grid-gap: 20px;
        margin-top: 1px;
    }

    .notice {
        text-align: start;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        color: white;
        /*background: #555555;*/
        background: #111;
        padding: 2rem;
        width: 100%;
        border-radius: 5px;
        transition: transform 0.2s ease-in-out;
        border-radius: 25px;
    }

    .notice p {
        font-size: 17px;
        font-weight: 100;
        color: whitesmoke;
        /*color: #708090;*/
    }

    .notices {
        width: 100%;
        margin: 10px auto;
        display: grid;
        grid-gap: 1rem;
        grid-template-columns: 1fr;
        margin-bottom: 10px;
    }

    .authorContainer {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
    }

    .author {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .author > div {
        margin: 0 0 0 10px;
    }

    .button {
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        border: 2px solid white;
        padding: 4px;
    }

    @media (min-width: 900px) {
        .list {
            flex-direction: row;
        }
        main > h1 {
            font-size: 48px;
        }
        .container {
            padding: 0;
        }
    }

    @media (min-width: 600px) {
        .notices {
            grid-template-columns: 1fr;
        }
    }
</style>
