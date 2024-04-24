import 'package:flutter/material.dart';

class DailiesView extends StatefulWidget {
  static const routeName = '/dailies';

  const DailiesView({super.key});

  @override
  State<DailiesView> createState() => DailiesViewState();
}

class DailiesViewState extends State<DailiesView> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Dailies - my daily efforts and wins'),
      ),
      body: const Padding(
        padding: EdgeInsets.all(16),
        child: Text("Dailies - my daily efforts and wins"),
      ),
    );
  }
}
