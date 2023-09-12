import PushNotification from "react-native-push-notification"

class Notification {

    setNavegador = (novoNavegador) => {
        navegador = novoNavegador
    }

    
    configure = () => {
        PushNotification.configure({
            onRegister: function (token) {
                console.log("[NotificationManager] onRegister token:", token);
            },
            onNotification: function (notification) {
                console.log("[NotificationManager] onNotification:", notification);
                navegador.navigate("Tela " + notification.id)
                
            },
        })
    }

    
    buildAndroidNotification = (id, title, message, data = {}, options = {}) => {
        return {
            id: id,
            channelId: 'my-channel',
            autoCancel: true,
            largeIcon: options.largeIcon || "ic_launcher",
            smallIcon: options.smallIcon || "ic_launcher",
            bigText: message || '',
            subText: title || '',
            vibrate: options.vibrate || false,
            vibration: options.vibration || 300,
            priority: options.priority || "high",
            importance: options.importance || "high",
            data: data
        }
    }

    
    showNotification = (id, title, message, data = {}, options = {}) => {
        PushNotification.localNotification({
            
            ...this.buildAndroidNotification(id, title, message, data, options),

            
            title: title || "",
            message: message || "",
            playSound: options.playSound || false,
            soundName: options.soundName || 'default',
            userInteraction: false,
            channelId: 'my-channel'
        })
    }

    
    cancelAllLocalNotification = () => {
        PushNotification.cancelAllLocalNotifications();
    }


    
    createChannel = () => {
        PushNotification.createChannel(
            {
                channelId: "my-channel", 
                channelName: "My channel", 
                channelDescription: "A channel to categorise your notifications", 
            },
            (created) => console.log(`createChannel returned '${created}'`)
        );
    }

    AgendaSchedule = () => {
        PushNotification.localNotificationSchedule({
            id: 2, 
            message: "Bateu a fome! Pedi um lanche.", 
            date: new Date(Date.now() + 3 * 1000), 
            allowWhileIdle: false, 
            repeatTime: 1, 
            repeatType: "minute",
            channelId: 'my-channel',
        });

        PushNotification.localNotificationSchedule({
            title: 'Redirect3',
            id: 3, 
            message: "Promoção Imperdivel não perca!", 
            date: new Date(Date.now() + 8 * 1000),  
            allowWhileIdle: false, 
            repeatTime: 1,
            repeatType: "minute",
            channelId: 'my-channel',
        });
    }

}


export const NotificationManager = new Notification;import PushNotification from "react-native-push-notification"

class Notification {

    setNavegador = (novoNavegador) => {
        navegador = novoNavegador
    }

    
    configure = () => {
        PushNotification.configure({
            onRegister: function (token) {
                console.log("[NotificationManager] onRegister token:", token);
            },
            onNotification: function (notification) {
                console.log("[NotificationManager] onNotification:", notification);
                navegador.navigate("Tela " + notification.id)
                
            },
        })
    }

    
    buildAndroidNotification = (id, title, message, data = {}, options = {}) => {
        return {
            id: id,
            channelId: 'my-channel',
            autoCancel: true,
            largeIcon: options.largeIcon || "ic_launcher",
            smallIcon: options.smallIcon || "ic_launcher",
            bigText: message || '',
            subText: title || '',
            vibrate: options.vibrate || false,
            vibration: options.vibration || 300,
            priority: options.priority || "high",
            importance: options.importance || "high",
            data: data
        }
    }

    
    showNotification = (id, title, message, data = {}, options = {}) => {
        PushNotification.localNotification({
            
            ...this.buildAndroidNotification(id, title, message, data, options),

            
            title: title || "",
            message: message || "",
            playSound: options.playSound || false,
            soundName: options.soundName || 'default',
            userInteraction: false,
            channelId: 'my-channel'
        })
    }

    
    cancelAllLocalNotification = () => {
        PushNotification.cancelAllLocalNotifications();
    }


    
    createChannel = () => {
        PushNotification.createChannel(
            {
                channelId: "my-channel", 
                channelName: "My channel", 
                channelDescription: "A channel to categorise your notifications", 
            },
            (created) => console.log(`createChannel returned '${created}'`)
        );
    }

    AgendaSchedule = () => {
        PushNotification.localNotificationSchedule({
            id: 2, 
            message: "Bateu a fome! Pedi um lanche.", 
            date: new Date(Date.now() + 3 * 1000), 
            allowWhileIdle: false, 
            repeatTime: 1, 
            repeatType: "minute",
            channelId: 'my-channel',
        });

        PushNotification.localNotificationSchedule({
            title: 'Redirect3',
            id: 3, 
            message: "Promoção Imperdivel não perca!", 
            date: new Date(Date.now() + 8 * 1000),  
            allowWhileIdle: false, 
            repeatTime: 1,
            repeatType: "minute",
            channelId: 'my-channel',
        });
    }

}


export const NotificationManager = new Notification;