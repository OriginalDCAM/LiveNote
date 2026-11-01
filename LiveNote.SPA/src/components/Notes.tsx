import {useQuery} from "@tanstack/react-query";
import {getNotes, type Note} from "../api/notes.ts";
import "./Notes.css";

const dateFormat = new Intl.DateTimeFormat(undefined, {dateStyle: "medium", timeStyle: "short"});

function NoteCard({note}: { note: Note }) {
    return (
        <article className="note-card">
            <h2 className="note-card__title">{note.title}</h2>
            <p className="note-card__content">{note.content}</p>
            <time className="note-card__date" dateTime={note.updatedAt}>
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
        <section className="notes">
            <header className="notes__header">
                <h1>Notes</h1>
                {notes && <span className="notes__count">{notes.length}</span>}
            </header>

            {isPending && <p className="notes__status">Loading...</p>}
            {error && <p className="notes__status notes__status--error">Error: {error.message}</p>}
            {notes?.length === 0 && <p className="notes__status">No notes yet.</p>}

            {notes && notes.length > 0 && (
                <div className="notes__grid">
                    {notes.map(note => <NoteCard key={note.id} note={note}/>)}
                </div>
            )}
        </section>
    );
}
