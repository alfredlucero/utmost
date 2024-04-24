import 'package:flutter/material.dart';

/// Displays the various settings that can be customized by the user.
///
/// When a user changes a setting, the SettingsController is updated and
/// Widgets that listen to the SettingsController are rebuilt.
class DailiesView extends StatelessWidget {
  const DailiesView({super.key});

  static const routeName = '/dailies';

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Dailies - my daily efforts and wins'),
      ),
      body: Padding(
        padding: const EdgeInsets.all(16),
        child: Text("Dailies - my daily efforts and wins"),
      ),
    );
  }
}
