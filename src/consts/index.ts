const TEST = {
    userId: 'E8RT0a1RVfbpFSYnguX6'
}
enum COLLATED_KEYS {
    INBOX = 'Inbox',
    TODAY = 'Today',
    NEXT_7_DAYS = 'Next_7_days'
}

const collatedTasks = [
    { id: COLLATED_KEYS.INBOX, name: 'Inbox' },
    { id: COLLATED_KEYS.TODAY, name: 'Today' },
    { id: COLLATED_KEYS.NEXT_7_DAYS, name: 'Next 7 days' }
]

const FB_COLLECTIONS = {
    TASKS: 'tasks',
    PROJECTS: 'projects'
}

const FB_KEYS = {
    PROJECTID: 'projectId',
    USERID: 'userId',
    DATE: 'date'
}

export { TEST, collatedTasks, FB_COLLECTIONS, FB_KEYS, COLLATED_KEYS }