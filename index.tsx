```tsx
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function ProfileScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >

        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>My Profile</Text>

          <TouchableOpacity>
            <Text style={styles.moreButton}>•••</Text>
          </TouchableOpacity>
        </View>

        {/* Profile */}
        <View style={styles.profileSection}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>JR</Text>
          </View>

          <Text style={styles.name}>Jane Repaja</Text>
          <Text style={styles.course}>BSIT • 3rd Year</Text>

          <Text style={styles.bio}>
            Information Technology Student
          </Text>

          <TouchableOpacity style={styles.editButton}>
            <Text style={styles.editButtonText}>
              Edit Profile
            </Text>
          </TouchableOpacity>
        </View>

        {/* Statistics */}
        <View style={styles.statsCard}>
          <View style={styles.stat}>
            <Text style={styles.statNumber}>12</Text>
            <Text style={styles.statLabel}>Projects</Text>
          </View>

          <View style={styles.divider} />

          <View style={styles.stat}>
            <Text style={styles.statNumber}>8</Text>
            <Text style={styles.statLabel}>Badges</Text>
          </View>

          <View style={styles.divider} />

          <View style={styles.stat}>
            <Text style={styles.statNumber}>24</Text>
            <Text style={styles.statLabel}>Points</Text>
          </View>
        </View>

        {/* Personal Information */}
        <Text style={styles.sectionTitle}>
          Personal Information
        </Text>

        <View style={styles.card}>

          <View style={styles.infoRow}>
            <View style={styles.iconBox}>
              <Text style={styles.icon}>👤</Text>
            </View>

            <View style={styles.infoContent}>
              <Text style={styles.infoLabel}>Full Name</Text>
              <Text style={styles.infoValue}>
                Jane Repaja
              </Text>
            </View>
          </View>

          <View style={styles.line} />

          <View style={styles.infoRow}>
            <View style={styles.iconBox}>
              <Text style={styles.icon}>✉</Text>
            </View>

            <View style={styles.infoContent}>
              <Text style={styles.infoLabel}>Email</Text>
              <Text style={styles.infoValue}>
                janeroserepaja@75@gmail.com
              </Text>
            </View>
          </View>

          <View style={styles.line} />

          <View style={styles.infoRow}>
            <View style={styles.iconBox}>
              <Text style={styles.icon}>🎓</Text>
            </View>

            <View style={styles.infoContent}>
              <Text style={styles.infoLabel}>Course</Text>
              <Text style={styles.infoValue}>
                Bachelor of Science in Information Technology
              </Text>
            </View>
          </View>

          <View style={styles.line} />

          {/* New Member Since Row */}
          <View style={styles.infoRow}>
            <View style={styles.iconBox}>
              <Text style={styles.icon}>📅</Text>
            </View>

            <View style={styles.infoContent}>
              <Text style={styles.infoLabel}>Member Since</Text>
              <Text style={styles.infoValue}>
                2026
              </Text>
            </View>
          </View>

        </View>

        {/* Settings */}
        <Text style={styles.sectionTitle}>
          Settings
        </Text>

        <View style={styles.card}>

          <TouchableOpacity style={styles.settingRow}>
            <View style={styles.settingLeft}>
              <View style={styles.iconBox}>
                <Text style={styles.icon}>⚙</Text>
              </View>

              <Text style={styles.settingText}>
                Account Settings
              </Text>
            </View>

            <Text style={styles.arrow}>›</Text>
          </TouchableOpacity>

          <View style={styles.line} />

          <TouchableOpacity style={styles.settingRow}>
            <View style={styles.settingLeft}>
              <View style={styles.iconBox}>
                <Text style={styles.icon}>🔔</Text>
              </View>

              <Text style={styles.settingText}>
                Notifications
              </Text>
            </View>

            <Text style={styles.arrow}>›</Text>
          </TouchableOpacity>

          <View style={styles.line} />

          <TouchableOpacity style={styles.settingRow}>
            <View style={styles.settingLeft}>
              <View style={styles.iconBox}>
                <Text style={styles.icon}>🔒</Text>
              </View>

              <Text style={styles.settingText}>
                Privacy
              </Text>
            </View>

            <Text style={styles.arrow}>›</Text>
          </TouchableOpacity>

        </View>

        <View style={styles.bottomSpace} />

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F2FF',
  },

  scrollContent: {
    paddingBottom: 30,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 18,
    paddingBottom: 10,
  },

  headerTitle: {
    fontSize: 25,
    fontWeight: '700',
    color: '#4B3B61',
  },

  moreButton: {
    fontSize: 22,
    color: '#8A78A6',
    letterSpacing: 2,
  },

  profileSection: {
    alignItems: 'center',
    paddingTop: 18,
    paddingBottom: 25,
  },

  avatar: {
    width: 105,
    height: 105,
    borderRadius: 53,
    backgroundColor: '#A78BCA',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 14,
    borderWidth: 4,
    borderColor: '#E8DDF5',
  },

  avatarText: {
    color: '#FFFFFF',
    fontSize: 32,
    fontWeight: '700',
  },

  name: {
    fontSize: 24,
    fontWeight: '700',
    color: '#40334F',
  },

  course: {
    fontSize: 14,
    color: '#8066A3',
    marginTop: 5,
    fontWeight: '600',
  },

  bio: {
    fontSize: 13,
    color: '#93869F',
    marginTop: 7,
  },

  editButton: {
    backgroundColor: '#9B7BC1',
    paddingHorizontal: 28,
    paddingVertical: 11,
    borderRadius: 12,
    marginTop: 15,
  },

  editButtonText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '700',
  },

  statsCard: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    marginHorizontal: 22,
    borderRadius: 18,
    paddingVertical: 18,
    alignItems: 'center',
    justifyContent: 'space-around',
    marginBottom: 27,
    borderWidth: 1,
    borderColor: '#E8DDF5',
  },

  stat: {
    flex: 1,
    alignItems: 'center',
  },

  statNumber: {
    fontSize: 21,
    fontWeight: '700',
    color: '#76569A',
  },

  statLabel: {
    fontSize: 12,
    color: '#998DA5',
    marginTop: 4,
  },

  divider: {
    width: 1,
    height: 35,
    backgroundColor: '#E8DDF5',
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#4B3B61',
    marginHorizontal: 22,
    marginBottom: 12,
  },

  card: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 22,
    borderRadius: 18,
    paddingHorizontal: 16,
    marginBottom: 25,
    borderWidth: 1,
    borderColor: '#EDE5F5',
  },

  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
  },

  iconBox: {
    width: 42,
    height: 42,
    borderRadius: 12,
    backgroundColor: '#F0E8FA',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 13,
  },

  icon: {
    fontSize: 18,
  },

  infoContent: {
    flex: 1,
  },

  infoLabel: {
    fontSize: 11,
    color: '#A095AA',
    marginBottom: 3,
  },

  infoValue: {
    fontSize: 14,
    color: '#51465B',
    fontWeight: '600',
  },

  line: {
    height: 1,
    backgroundColor: '#F0EAF5',
  },

  settingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 13,
  },

  settingLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  settingText: {
    fontSize: 14,
    color: '#51465B',
    fontWeight: '600',
  },

  arrow: {
    fontSize: 27,
    color: '#A995BC',
  },

  bottomSpace: {
    height: 20,
  },
});
```
