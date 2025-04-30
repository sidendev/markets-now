import { NotificationsForm } from '../../components/notifications-form';

export default function NotificationsPage() {
    return (
        <div className="container max-w-2xl mx-auto px-4 py-10">
            <h1 className="text-3xl font-bold mb-6">
                Stock Price Alert Notifications
            </h1>
            <p className="text-muted-foreground mb-8">
                Set up notifications to receive alerts when stocks reach your
                target price.
            </p>
            <NotificationsForm />
        </div>
    );
}
