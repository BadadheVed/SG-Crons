export async function getHealthCron() {
  const res = await fetch("https://subscription.stackguard.io/health");

  console.log("Health Cron Status:", res.status);
  console.log("Health Cron Response:", await res.json());
}
