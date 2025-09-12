import styles from "./example.module.css";

export default function Example() {
    // TODO: Create syntax highlighting here
    return (
        <>
            <section id="examples">
                <div>
                    <h2>Cursed Code Examples</h2>
                    <div className={styles["code-example"]}>
                        <code style={{ whiteSpace: "pre-line" }}>
gyatt score skibidi 85.

edgin check uwu score flex 90 owo bussin
    yo fam yap uwu "Absolutely bussin!" owo.
no cap only in ohio edgin check uwu score flex 80 owo bussin
    yo fam yap uwu "Pretty based!" owo.
no cap only in ohio bussin
   yo fam yap uwu "Mid." owo.
no cap
                        </code>
                    </div>

                </div>
            </section>
        </>
    )
}