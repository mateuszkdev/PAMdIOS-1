const activities = [
    { type: "bieg", minutes: 35, calories: 320 },
    { type: "rower", minutes: 50, calories: 410 },
    { type: "spacer", minutes: 20, calories: 90 },
    { type: "siłownia", minutes: 60, calories: 450 }
];

const totalMinutes = activities.reduce((sum, activity) => sum + activity.minutes, 0)

const totalCalories = activities.reduce((sum, activity) => sum + activity.calories, 0)

const longActivities = activities.filter(activity => activity.minutes > 30)

const mostIntenseActivity = activities.reduce((max, activity) => 
    activity.calories > max.calories ? activity : max
)

const avgIntensity = (totalCalories / totalMinutes).toFixed(2)

console.log(`
    === RAPORT TRENINGOWY ===
    Łączny czas treningu: ${totalMinutes} minut
    Łączne spalone kalorie: ${totalCalories} kcal
    Średnia intensywność: ${avgIntensity} kcal/min

    Aktywności dłuższe niż 30 minut (${longActivities.length}):
    ${longActivities.map(a => `- ${a.type}: ${a.minutes} min (${a.calories} kcal)`).join('\n')}

    Najbardziej intensywny trening: ${mostIntenseActivity.type} (${mostIntenseActivity.calories} kcal)
`)