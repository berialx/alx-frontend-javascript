export default function getListStudentIds(idslist) {
    if (Array.isArray(idslist)) {
        return idslist.map((obj) => obj.id);
    }

    return [];
}
