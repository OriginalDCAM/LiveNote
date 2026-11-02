import {useQuery} from "@tanstack/react-query";
import {getNotes, type Note} from "../api/notes.ts";
import "./Notes.css";

const dateFormat = new Intl.DateTimeFormat(undefined, {dateStyle: "medium", timeStyle: "short"});

function NoteCard({note}: { note: Note }) {
    return (
        <article className="card card--interactive">
            <h3>{note.title}</h3>
            <p className="note-card__content">{note.content}</p>
            <time className="card__footer" dateTime={note.updatedAt}>
                {dateFormat.format(new Date(note.updatedAt))}
            </time>
        </article>
    );
}

export default function Notes() {
    const {data: notes, isPending, error} = useQuery({
        queryKey: ["notes"],
        queryFn: getNotes
    });

    return (
        <section>
            <header className="notes__header">
                <h1>Notes</h1>
                {notes && <span className="badge">{notes.length}</span>}
            </header>

            {isPending && <p className="status">Loading...</p>}
            {error && <p className="status status--error">Error: {error.message}</p>}
            {notes?.length === 0 && <p className="status">No notes yet.</p>}

            {notes && notes.length > 0 && (
                <div className="grid">
                    {notes.map(note => <NoteCard key={note.id} note={note}/>)}
                </div>
            )}
        </section>
    );
}
